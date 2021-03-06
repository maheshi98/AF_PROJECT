package com.backend.cms.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.backend.cms.Model.FileStorageProperties;
import com.backend.cms.Model.Workshop;
import com.backend.cms.Repository.WorkshopRepo;
import com.backend.cms.Exceptions.FileStorageException;
import com.backend.cms.Exceptions.MyFileNotFoundException;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.nio.file.StandardCopyOption;
import java.io.IOException;
import java.net.MalformedURLException;

@Service
public class WorkshopService {
    private final Path fileStorageLocation;

    @Autowired
    WorkshopRepo workshopRepository;

    @Autowired
    public WorkshopService(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir()).toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new FileStorageException("Could not create the directory where the uploaded files will be stored.",
                    ex);
        }
    }

    public String storeFile(MultipartFile file) {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if (fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            return fileName;
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }

    public Resource loadFileAsResource(String fileName) {
        try {
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if (resource.exists()) {
                return resource;
            } else {
                throw new MyFileNotFoundException("File not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new MyFileNotFoundException("File not found " + fileName, ex);
        }
    }

    public List<Workshop> getAll() {
        return workshopRepository.findAll();
    }

    public Workshop getById(String id) {
        return workshopRepository.findById(id).get();
    }

    public List<Workshop> findByUserId(String id) {
        return workshopRepository.findByUserId(id);
    }

    public Workshop saveOrUpdateWorkshop(Workshop workshop) {
        return workshopRepository.save(workshop);
    }

    public void deleteWorkshopById(String id) {
        workshopRepository.deleteById(id);
    }
}



package com.example.ICAF.Services;

import com.example.ICAF.Model.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public interface userService {

    /**
     * Creates the.
     *
     * @param user the user
     * @return the user
     */
    User create(User user);

    /**
     * Update.
     *
     * @param user the user
     * @return the user
     */
    User update(User user);



    /**
     * Delete.
     *
     * @param id the id
     */
    public void delete(String id);

    /**
     * Gets the by id.
     *
     * @param id the id
     * @return the by id
     */
    public Optional<User> getById(String id);

    /**
     * Gets the all.
     *
     * @return the all
     */
    List<User> getAll();

}

import ConferenceService from '../Services/Conference';

/**
 * @description This method create new conference
 * @param {Object} data 
 * @memberof ConferenceHandler
 */
export const createConferenceFn = (data) => {
    console.log("ConferenceHandler :: createConferenceFn", data);
    ConferenceService.create(data)
    .then(response => {
        return "Data successfully entered.";
        // alert('Data successfully entered.');
    })
    .catch(error => {
        console.log(error.message);
        // alert(error.message);
        return error.message;
    })
}

// /**
//  * @description This method get Important Date By ID
//  * @param {String} id 
//  * @memberof ConferenceHandler
//  */
// export const getImportantDateByIdFn = (id) => {
//     console.log("ConferenceHandler :: getImportantDateByIdFn", id);
//     return ImportantDateService.get(id).then(response => response.data);
// }

// /**
//  * @description This method get all Important Dates
//  * @param {Function} callback
//  * @memberof ConferenceHandler
//  */
// export const getAllImportantDateFn = (callback) => {
//     console.log("ConferenceHandler :: getAllImportantDateFn", callback);
//     ImportantDateService.getAll()
//         .then(response => callback({ data: response.data }))
//         .catch(error => callback({ error: error }));
// }
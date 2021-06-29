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
            // return "Data successfully entered.";
            alert('Data successfully entered.');
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message);
            // return error.message;
        })
}

/**
 * @description This method get all Conferences
 * @param {Function} callback
 * @memberof ConferenceHandler
 */
export const getAllConferenceFn = (callback) => {
    console.log("ConferenceHandler :: getAllConferenceFn", callback);
    ConferenceService.getAll()
        .then(response => callback({ data: response.data }))
        .catch(error => callback({ error: error }));
}

/**
 * @description This method get Conference By ID
 * @param {String} id 
 * @memberof ConferenceHandler
 */
export const getConferenceByIdFn = (id) => {
    console.log("ConferenceHandler :: getConferenceByIdFn", id);
    return ConferenceService.get(id).then(response => response.data);
}


/**
 * @description This method get Approved Conference
 * @param {Function} callback
 * @memberof ConferenceHandler
 */
export const getApprovedConferenceFn = (callback) => {
    console.log("ConferenceHandler :: getApprovedConferenceFn", callback);
    ConferenceService.approvedConference()
        .then(response => callback({ data: response.data }))
        .catch(error => callback({ error: error }));
}

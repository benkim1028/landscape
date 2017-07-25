export const selectPhoto = (photo) => {
    return {
        type: "PHOTO_SELECTED",
        payload: photo
    }
};
import cloudinary, { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";

export async function upload(
    file: string, 
    public_id?: string, 
    overwrite?: boolean, 
    invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
    return new Promise(async (resolve, reject) => {

        try {
            const result = await cloudinary.v2.uploader.upload(
                file,
                {
                    public_id,
                    overwrite,
                    invalidate,
                    resource_type: "auto",
                }
            );
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

export async function videoUpload(
    file: string, 
    public_id?: string, 
    overwrite?: boolean, 
    invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
    return new Promise(async (resolve, reject) => {

        try {
            const result = await cloudinary.v2.uploader.upload(
                file,
                {
                    public_id,
                    overwrite,
                    invalidate,
                    chunk_size: 50000,
                    resource_type: "video",
                }
            );
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}
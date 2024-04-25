import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo = null;
  let user = null;
  await uploadPhoto().then((result) => {
    photo = result;
  });
  await createUser().then((result) => {
    user = result;
  });
  return { photo, user };
}

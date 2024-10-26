
type Folder = 'albums'
| 'todos'
| 'languages';

const db_url: string = 'https://learning-angular-app-http-default-rtdb.europe-west1.firebasedatabase.app';

export const getFirebaseEndpoint = ( folder: Folder ): string => {
    return db_url + '/' + folder + '.json';
};

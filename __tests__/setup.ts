import {mockGoogleCloudFirestore} from 'firestore-jest-mock';

jest.setTimeout(600000);

mockGoogleCloudFirestore({
  database: {
    users: [
      { id: 'abc123', name: 'Homer Simpson' },
      { id: 'abc456', name: 'Lisa Simpson' },
    ],
    posts: [{ id: '123abc', title: 'Really cool title' }],
  },
});  
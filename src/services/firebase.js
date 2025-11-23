// This is a mock Firebase configuration for development.
// Replace with actual Firebase config when ready to deploy.

export const db = {
    collection: (name) => ({
        get: async () => {
            console.log(`Fetching from collection: ${name}`);
            return [];
        },
        add: async (data) => {
            console.log(`Adding to collection: ${name}`, data);
            return { id: 'mock-id-' + Date.now() };
        }
    })
};

export const auth = {
    currentUser: null,
    signIn: async () => {
        console.log('Mock sign in');
        return { user: { uid: 'mock-user' } };
    },
    signOut: async () => {
        console.log('Mock sign out');
    }
};

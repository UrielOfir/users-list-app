export type BasicUser = {
    name: {
        title: string
        first: string;
        last: string;
    };
    email: string;
    dob: {
        date: string;
        age: number;
    };
    id: {
        name: string;
        value: string;
    };
};

export type DetailedUser = BasicUser & {
    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: number;
        coordinates: {
            latitude: string;
            longitude: string;
        };
        timezone: {
            offset: string;
            description: string;
        };
    };
    cell: string;
    id: {
        name: string;
        value: string;
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: string;
};


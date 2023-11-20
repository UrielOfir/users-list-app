export type BasicUser = {
    name: {
        first: string;
        last: string;
    };
    email: string;
    dob: {
        age: number;
    };
};

export type DetailedUser = BasicUser & {
    name: {
        title: string;
    };
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


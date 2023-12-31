import UsersDao from "../daos/users.dao";
import { CRUD } from "../../common/interfaces/crud.interface";
import { UserDto } from "../dto/user.dto";

import { BasicUser, DetailedUser } from "../../../shared-types/Users";

const users: BasicUser[] = [
    {
        "name": {
            "title": "Ms",
            "first": "Dana",
            "last": "Long"
        },
        "email": "dana.long@example.com",
        "dob": {
            "date": "1979-12-11T20:53:16.155Z",
            "age": 43
        },
        "id": {
            "name": "SSN",
            "value": "586-26-8110"
        }
    },
    {
        "name": {
            "title": "Mr",
            "first": "Same",
            "last": "Freeman"
        },
        "email": "same.freeman@example.com",
        "dob": {
            "date": "1958-12-09T09:30:26.361Z",
            "age": 64
        },
        "id": {
            "name": "SSN",
            "value": "737-49-6701"
        }
    },
    {
        "name": {
            "title": "Mr",
            "first": "Glen",
            "last": "Ortiz"
        },
        "email": "glen.ortiz@example.com",
        "dob": {
            "date": "1985-09-02T21:03:56.556Z",
            "age": 38
        },
        "id": {
            "name": "SSN",
            "value": "308-18-0274"
        }
    },
    {
        "name": {
            "title": "Miss",
            "first": "Brandie",
            "last": "Stephens"
        },
        "email": "brandie.stephens@example.com",
        "dob": {
            "date": "1959-12-14T01:10:00.419Z",
            "age": 63
        },
        "id": {
            "name": "SSN",
            "value": "173-39-3657"
        }
    },
    {
        "name": {
            "title": "Miss",
            "first": "Gladys",
            "last": "Graves"
        },
        "email": "gladys.graves@example.com",
        "dob": {
            "date": "1984-07-09T17:54:34.502Z",
            "age": 39
        },
        "id": {
            "name": "SSN",
            "value": "188-57-5790"
        }
    }
];

const detailedUser: DetailedUser = {
    "name": {
        "title": "Mr",
        "first": "Rick",
        "last": "Miller"
    },
    "location": {
        "street": {
            "number": 3829,
            "name": "James St"
        },
        "city": "Waxahachie",
        "state": "South Carolina",
        "country": "United States",
        "postcode": 45618,
        "coordinates": {
            "latitude": "-37.2481",
            "longitude": "-128.4418"
        },
        "timezone": {
            "offset": "-6:00",
            "description": "Central Time (US & Canada), Mexico City"
        }
    },
    "email": "rick.miller@example.com",
    "dob": {
        "date": "1959-01-12T22:47:14.470Z",
        "age": 64
    },
    "cell": "(308) 320-0701",
    "id": {
        "name": "SSN",
        "value": "802-12-5428"
    },
    "picture": {
        "large": "https://randomuser.me/api/portraits/men/82.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/82.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/82.jpg"
    },
    "nat": "US"
}

class UsersService implements CRUD {
  async create(resource: UserDto) {
    return UsersDao.addUser(resource);
  }

  async deleteById(resourceId: string) {
    return UsersDao.removeUserById(resourceId);
  }

  async list(limit: number, page: number) {
    return users;
  }

  async patchById(resource: UserDto) {
    return UsersDao.patchUserById(resource);
  }

  async readById(resourceId: string) {
    return detailedUser;
  }

  async updateById(resource: UserDto) {
    return UsersDao.putUserById(resource);
  }

  async getUserByEmail(email: string) {
    return UsersDao.getUserByEmail(email);
  }
}

export default new UsersService();

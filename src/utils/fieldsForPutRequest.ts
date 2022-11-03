import User from "models/User";
import { UserChangeData } from "types/contracts/user";

interface FieldsForChangeUser {
  user?: User;
}

export const userMutationFields = ({ user }: FieldsForChangeUser): UserChangeData => {
  return user
    ? {
        name: user.Firstname,
        surname: user.Lastname,
        email: user.Email,
        phone: user.PhoneNumber,
        city: user.City,
        patronymic: user.Patronymic,
        id: user.Id,
        restaurantId: 1 || user.RestaurantId,
      }
    : ({} as UserChangeData);
};

import { PlaylistCreateNestedManyWithoutUsersInput } from "./PlaylistCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SubscriptionCreateNestedManyWithoutUsersInput } from "./SubscriptionCreateNestedManyWithoutUsersInput";
import { TrackCreateNestedManyWithoutUsersInput } from "./TrackCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  playlists?: PlaylistCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  subscriptions?: SubscriptionCreateNestedManyWithoutUsersInput;
  tracks?: TrackCreateNestedManyWithoutUsersInput;
  username: string;
};

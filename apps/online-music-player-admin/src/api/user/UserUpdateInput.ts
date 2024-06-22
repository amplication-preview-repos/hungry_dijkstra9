import { PlaylistUpdateManyWithoutUsersInput } from "./PlaylistUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SingerUpdateManyWithoutUsersInput } from "./SingerUpdateManyWithoutUsersInput";
import { SubscriptionUpdateManyWithoutUsersInput } from "./SubscriptionUpdateManyWithoutUsersInput";
import { TrackUpdateManyWithoutUsersInput } from "./TrackUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  playlists?: PlaylistUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  singers?: SingerUpdateManyWithoutUsersInput;
  subscriptions?: SubscriptionUpdateManyWithoutUsersInput;
  tracks?: TrackUpdateManyWithoutUsersInput;
  username?: string;
};

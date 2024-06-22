import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SingerUpdateInput = {
  bio?: string | null;
  dateOfBirth?: Date | null;
  description?: string | null;
  name?: string | null;
  photoUrl?: string | null;
  track?: TrackWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

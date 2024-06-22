import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SingerWhereInput = {
  bio?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  photoUrl?: StringNullableFilter;
  track?: TrackWhereUniqueInput;
  user?: UserWhereUniqueInput;
};

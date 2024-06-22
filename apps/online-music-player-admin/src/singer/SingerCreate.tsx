import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TrackTitle } from "../track/TrackTitle";
import { UserTitle } from "../user/UserTitle";

export const SingerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="photoUrl" source="photoUrl" />
        <ReferenceInput source="track.id" reference="Track" label="Track">
          <SelectInput optionText={TrackTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

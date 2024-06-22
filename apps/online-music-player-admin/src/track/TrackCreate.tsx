import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PlaylistTitle } from "../playlist/PlaylistTitle";
import { UserTitle } from "../user/UserTitle";

export const TrackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="album" source="album" />
        <TextInput label="artist" source="artist" />
        <NumberInput step={1} label="duration" source="duration" />
        <TextInput label="genre" source="genre" />
        <ReferenceInput
          source="playlist.id"
          reference="Playlist"
          label="Playlist"
        >
          <SelectInput optionText={PlaylistTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
        <TextInput label="url" source="url" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

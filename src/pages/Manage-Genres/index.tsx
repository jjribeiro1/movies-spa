import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Header } from '../../components/header';
import { RadixDialog } from '../../components/radix-dialog';
import { ToastMessage } from '../../components/radix-toast';
import { GenreService } from '../../services/genre-service';
import { CreateGenreInput, Genre } from '../../types/genre-service-types';
import {
  CreateGenreContainer,
  GenreItem,
  GenreList,
  ManageSection,
  GenreListTitle,
  Actions,
  EditButton,
  DeleteButton,
  GenreForm,
} from './style';

export function ManageGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genreToEdit, setGenreToEdit] = useState({} as Genre);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState<string[]>([]);
  const [control, setControl] = useState(false);
  const [createGenreInputValue, setCreateGenreInputValue] = useState<CreateGenreInput>({
    name: '',
  });

  async function getGenres() {
    try {
      const data = await GenreService().getAll();
      setGenres(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCreateGenreSubmit() {
    try {
      await GenreService().create(createGenreInputValue);
      setControl(!control);
      cleanInputValue();
    } catch (error: any) {
      setToastMessage(error.response.data.message);
      setOpenToast(true);
    }
  }

  async function handleUpdateGenreSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const data = {
        name:
          e.currentTarget.Name.value === genreToEdit.name ? undefined : e.currentTarget.Name.value,
      };
      await GenreService().update(genreToEdit.id, data.name);
      setControl(!control);
      setOpenEditModal(false);
    } catch (error: any) {
      setToastMessage(error.response.data.message);
      setOpenToast(true);
    }
  }

  async function handleDeleteGenre(id: string) {
    try {
      await GenreService().remove(id);
      setControl(!control);
    } catch (error: any) {
      setToastMessage(['Erro inesperado ao deletar um gênero']);
      setOpenToast(true);
    }
  }

  function cleanInputValue() {
    setCreateGenreInputValue({ name: '' });
  }

  useEffect(() => {
    getGenres();
  }, [control]);

  return (
    <>
      <Header />

      <ManageSection>
        <CreateGenreContainer>
          <h2>Adicionar novo gênero</h2>
          <input
            type="text"
            onChange={(e) => setCreateGenreInputValue({ name: e.target.value })}
            value={createGenreInputValue.name}
          />
          <button onClick={handleCreateGenreSubmit}>Cadastrar</button>
        </CreateGenreContainer>

        <GenreList>
          <GenreListTitle>Gêneros Cadastrados:</GenreListTitle>

          {genres.map((genre) => (
            <GenreItem key={genre.id}>
              <span>{genre.name}</span>
              <Actions>
                <EditButton
                  type="button"
                  onClick={() => {
                    cleanInputValue();
                    setOpenEditModal(true);
                    setGenreToEdit(genre);
                  }}
                >
                  editar
                </EditButton>
                <DeleteButton type="button" onClick={() => handleDeleteGenre(genre.id)}>
                  deletar
                </DeleteButton>
              </Actions>
            </GenreItem>
          ))}
        </GenreList>
      </ManageSection>

      <RadixDialog open={openEditModal} onOpenChange={setOpenEditModal}>
        <GenreForm onSubmit={handleUpdateGenreSubmit}>
          <span
            onClick={() => {
              setOpenEditModal(false);
              cleanInputValue();
            }}
          >
            x
          </span>
          <label>
            Nome
            <input type="text" id="name" name="Name" defaultValue={genreToEdit.name} />
          </label>
          <button type="submit">Editar</button>
        </GenreForm>
      </RadixDialog>

      <ToastMessage
        openToast={openToast}
        setOpenToast={setOpenToast}
        title="Erro"
        messages={toastMessage}
      />
    </>
  );
}

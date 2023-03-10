import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { Header } from '../../components/header';
import { RadixDialog } from '../../components/radix-dialog';
import { ToastMessage } from '../../components/radix-toast';
import { StreamingService } from '../../services/streaming-service';
import {
  CreateStreamingInput,
  Streaming,
  UpdateStreamingInput,
} from '../../types/streaming-service-types';
import {
  CreateStreamingButton,
  CreateStreamingContainer,
  StreamingItem,
  StreamingList,
  ManageSection,
  StreamingListTitle,
  InputControls,
  Actions,
  EditButton,
  DeleteButton,
  StreamingForm,
  FormControls,
  SubmitButton,
} from './style';

export function ManageStreamings() {
  const [streamings, setStreamings] = useState<Streaming[]>([]);
  const [streamingToUpdate, setStreamingToUpdate] = useState({} as Streaming);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(['']);
  const [createStreamingInputValues, setCreateStreamingInputValues] = useState({
    name: '',
    price: '',
  });
  const [control, setControl] = useState(false);

  async function getStreamings() {
    try {
      const data = await StreamingService().getAll();
      setStreamings(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleCreateStreamingInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCreateStreamingInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  function handleCreateStreamingSubmit() {
    const error: string[] = [];
    const data: CreateStreamingInput = {
      name: createStreamingInputValues.name,
      price: parseFloat(createStreamingInputValues.price),
    };
    data.name.length >= 3 ? null : error.push('Nome precisa ter pelo menos 3 caracteres');
    data.price > 0 ? null : error.push('Preço deve ser maior que 0');

    if (error.length > 0) {
      setToastMessage(error);
      setOpenToast(true);
      return;
    }
    cleanInputValues();
    createStreaming(data);
  }

  async function createStreaming(data: CreateStreamingInput) {
    try {
      await StreamingService().create(data);
      setControl(!control);
    } catch (error: any) {
      setToastMessage(error.response.data.message);
      setOpenToast(true);
    }
  }

  function handleUpdateStreamingSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const error: string[] = [];
    const data: CreateStreamingInput = {
      name:
        e.currentTarget.Name.value === streamingToUpdate.name
          ? undefined
          : e.currentTarget.Name.value,
      price: parseFloat(e.currentTarget.price.value),
    };

    if (data.name) {
      data.name.length >= 3 ? null : error.push('Nome precisa ter pelo menos 3 caracteres');
    }

    data.price > 0 ? null : error.push('Preço deve ser maior que 0');

    if (error.length > 0) {
      setToastMessage(error);
      setOpenToast(true);
      return;
    }
    updateStreaming({ id: streamingToUpdate.id, ...data });
  }

  async function updateStreaming(data: UpdateStreamingInput) {
    try {
      await StreamingService().update(data);
      setControl(!control);
      setOpenEditModal(false);
    } catch (error: any) {
      setToastMessage(error.response.data.message);
      setOpenToast(true);
    }
  }

  async function handleDeleteStreamingSubmit(id: string) {
    try {
      await StreamingService().remove(id);
      setControl(!control);
    } catch (error: any) {
      setToastMessage(['Um erro inesperado aconteceu ao tentar remover o streaming']);
      setOpenToast(true);
    }
  }

  function cleanInputValues() {
    setCreateStreamingInputValues({ name: '', price: '' });
  }

  useEffect(() => {
    getStreamings();
  }, [control]);

  return (
    <>
      <Header />
      <ManageSection>
        <CreateStreamingContainer>
          <InputControls>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleCreateStreamingInputChange}
              value={createStreamingInputValues.name}
            />
          </InputControls>
          <InputControls>
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={handleCreateStreamingInputChange}
              value={createStreamingInputValues.price}
            />
          </InputControls>
          <CreateStreamingButton onClick={handleCreateStreamingSubmit}>
            Cadastrar
          </CreateStreamingButton>
        </CreateStreamingContainer>

        <StreamingListTitle>Streaming Disponíveis:</StreamingListTitle>
        <StreamingList>
          {streamings.map((streaming) => (
            <StreamingItem key={streaming.id}>
              <div>
                <h3>Nome:</h3>
                <span>{streaming.name}</span>
              </div>
              <div>
                <h3>Preço:</h3>
                <span>{streaming.price}</span>
              </div>
              <Actions>
                <EditButton
                  onClick={() => {
                    setOpenEditModal(true);
                    cleanInputValues();
                    setStreamingToUpdate(streaming);
                  }}
                >
                  editar
                </EditButton>
                <DeleteButton onClick={() => handleDeleteStreamingSubmit(streaming.id)}>
                  deletar
                </DeleteButton>
              </Actions>
            </StreamingItem>
          ))}
        </StreamingList>
      </ManageSection>

      <RadixDialog open={openEditModal} onOpenChange={setOpenEditModal}>
        <StreamingForm onSubmit={handleUpdateStreamingSubmit}>
          <span onClick={() => setOpenEditModal(false)}>X</span>
          <FormControls>
            <label htmlFor="name">Nome</label>
            <input type="text" name="Name" id="name" defaultValue={streamingToUpdate.name} />
          </FormControls>

          <FormControls>
            <label htmlFor="price">Preço</label>
            <input type="number" name="price" id="price" defaultValue={streamingToUpdate.price} />
          </FormControls>
          <SubmitButton type="submit">Editar</SubmitButton>
        </StreamingForm>
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

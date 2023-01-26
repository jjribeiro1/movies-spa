import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Header } from '../../components/header';
import { StreamingService } from '../../services/streaming-service';
import { CreateStreamingInput, Streaming } from '../../types/streaming-service-types';
import {
  CreateStreamingButton,
  CreateStreamingContainer,
  StreamingItem,
  StreamingList,
  ManageSection,
  Title,
  InputControls,
} from './style';

export function ManageStreamings() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const priceInputRef = useRef<HTMLInputElement>(null);
  const [inputValues, setInputValues] = useState({
    name: '',
    price: '',
  });
  const [Streamings, setStreamings] = useState<Streaming[]>([]);
  const [control, setControl] = useState(false);

  async function getStreamings() {
    try {
      const data = await StreamingService.getAll();
      setStreamings(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  async function handleSubmit() {
    try {
      const data = {
        name: inputValues.name,
        price: parseInt(inputValues.price),
      };
      await StreamingService.create(data);
      setControl(!control);
      cleanInputValues()
    } catch (error) {
      console.log(error);
    }
  }

  function cleanInputValues() {
    if (nameInputRef && nameInputRef.current) {
      nameInputRef.current.value = '';
    }
    if (priceInputRef && priceInputRef.current) {
      priceInputRef.current.value = '';
    }
  }

  useEffect(() => {
    getStreamings();
  }, [control]);

  return (
    <ManageSection>
      <Header />
      <CreateStreamingContainer>
        <InputControls>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" onChange={handleChange} ref={nameInputRef} />
        </InputControls>
        <InputControls>
          <label htmlFor="price">Preço</label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={handleChange}
            ref={priceInputRef}
          />
        </InputControls>

        <CreateStreamingButton onClick={handleSubmit}>Cadastrar</CreateStreamingButton>
      </CreateStreamingContainer>
      <Title>Streaming Disponíveis:</Title>
      <StreamingList>
        {Streamings.map((Streaming) => (
          <StreamingItem key={Streaming.id}>{Streaming.name}</StreamingItem>
        ))}
      </StreamingList>
    </ManageSection>
  );
}

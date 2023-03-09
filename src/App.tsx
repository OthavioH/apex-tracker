import { redirect, useNavigate } from 'react-router-dom';
import { FormContainer, MainContainer, PlatformSelect,PlatformOption, PlayersNameInput, SubmitButton } from './shared/styles/styles'

export default function App() {
  const navigate = useNavigate();

  async function handleSubmit(event: any) {
    event.preventDefault();
    
    const platform:String = event.target.platform.value;
    const nickname:String = event.target.nickname.value;

    return navigate(`/player/${platform.toUpperCase()}/${nickname}`);
  }

  return (
    <MainContainer>
      <FormContainer onSubmit={handleSubmit}>
        <PlatformSelect id='platform'>
          <PlatformOption value="pc">PC</PlatformOption>
            <PlatformOption value="xbox">XBOX</PlatformOption>
          <PlatformOption value="psn">PSN</PlatformOption>
        </PlatformSelect>
        <PlayersNameInput id='nickname' type="text" placeholder='Type your nickname here...'></PlayersNameInput>
        <SubmitButton type='submit'>Submit</SubmitButton>
      </FormContainer>
    </MainContainer> 
  );
}

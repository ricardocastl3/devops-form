import {
  FormCheck,
  FormContainer,
  FormGroup,
  HomeContainer,
  MultipleSelect,
  SimpleSelect,
} from "./styled";
import {
  UserCircle,
  EnvelopeSimple,
  Buildings,
  AddressBook,
  Heart,
  Calculator,
  Package,
} from "@phosphor-icons/react";

export function Home() {

  return (
    <HomeContainer>
      <h2>
        <Package size={30} />
        DevOps Form Registration Template
        </h2>
      <h3>Inscrições</h3>

      <FormContainer>
        <FormGroup>
          <label htmlFor="name">
            <UserCircle size={20} />
            Nome completo
          </label>
          <input type="text" id="name" placeholder="Ex: Ricardo Castle..." />
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">
            <EnvelopeSimple size={20} />
            Email
          </label>
          <input type="text" id="email" placeholder="Ex: meuemail@gmail.com" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="office">
            <Buildings size={20} />
            Cargo
          </label>
          <SimpleSelect id="office">
            <option value="">------ Selecione o seu cargo ------</option>
            <option value="FullStack Developer">FullStack Developer</option>
            <option value="Front-End Dev.">Front-End Dev.</option>
            <option value="Back-End Dev.">Back-End Dev.</option>
            <option value="DevOps">DevOps</option>
          </SimpleSelect>
        </FormGroup>

        <FormGroup>
          <label htmlFor="interest">
            <Heart size={20} />
            Interesses
          </label>
          <MultipleSelect id="interest" multiple>
            <option value="GitHub & Git">GitHub & Git</option>
            <option value="Kubernetes">Kubernetes</option>
            <option value="GitLab">GitLab</option>
            <option value="Kafka">Kafka</option>
            <option value="Terraform">Terraform</option>
            <option value="Python">Python</option>
            <option value="TensorFlow">TensorFlow</option>
            <option value="Keras">Keras</option>
            <option value="Docker">Docker</option>
          </MultipleSelect>
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">
            <Calculator size={20} />
            Quanto é: 5 + 5
          </label>
          <input type="text" id="email" placeholder="Ex: 20..." />
        </FormGroup>

        <FormCheck>
          <div>
            <input type="checkbox" name="" id="agreeTerm" />
            <label htmlFor="agreeTerm">Concordar com os termos</label>
          </div>
          <button>
            <AddressBook size={20} />
            Cadastrar
          </button>
        </FormCheck>
      </FormContainer>
    </HomeContainer>
  );
}

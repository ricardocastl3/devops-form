import { useForm } from "react-hook-form";
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

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Alert } from "../../components/Alert";
import { useState } from "react";
import { Modal } from "../../components/Modal";

const createNewRegisterSchema = zod.object({
  fullname: zod.string().min(1, "Preencha o campo por favor..."),
  email: zod
    .string()
    .min(1, "Preencha o campo por favor...")
    .email("Digite um email válido..."),
  office: zod.string().min(1, "Selecione sua área de atuação..."),
  numberVerification: zod
    .number({ invalid_type_error: "Informe apenas números" })
    .min(1, "Informe pelo menos um valor..."),
  checkValidation: zod.boolean({

    required_error:
      "Por favor, confirme com os termos de uso para continuar...",
  }),
  interest: zod.string().array().min(1, "Selecione pelos menos 2 interesses"),
});

export function Home() {
  const { register, handleSubmit, reset, formState, watch } = useForm({
    resolver: zodResolver(createNewRegisterSchema),
    defaultValues: {
      fullname: "",
      email: "",
      office: "",
      interest: [],
      numberVerification: 0,
      checkValidation: false,
    },
  });

  type newRegisterFormData = zod.infer<typeof createNewRegisterSchema>;

  function createNewRegister(data: newRegisterFormData) {
    console.log(data);
    setRegisterDone(true);
    reset();
  }

  const firstNumber = Math.round(Math.random() * 99);
  const secondNumber = Math.round(Math.random() * 99);

  const fullname = watch("fullname");
  const isSubmittedForm = !fullname;
  const [registerDone, setRegisterDone] = useState(false);

  {setTimeout(() => {
    setRegisterDone(false);
  }, 4000)}

  return (
    <HomeContainer>
      <h2>
        <Package size={30} />
        DevOps Form Registration Template
      </h2>
      <h3>Inscrições</h3>

      {registerDone == false ? (
        <Modal content="Obrigado pela sua inscrição" />
      ) : (
        <span></span>
      )}

      <FormContainer onSubmit={handleSubmit(createNewRegister)}>
        <FormGroup>
          <label htmlFor="name">
            <UserCircle size={20} />
            Nome completo
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ex: Ricardo Castle..."
            {...register("fullname")}
          />
          {formState.errors.fullname?.message && (
            <Alert
              variant="danger"
              content={formState.errors.fullname.message}
            />
          )}
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">
            <EnvelopeSimple size={20} />
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Ex: meuemail@gmail.com"
            {...register("email")}
          />
          {formState.errors.email?.message && (
            <Alert variant="danger" content={formState.errors.email?.message} />
          )}
        </FormGroup>

        <FormGroup>
          <label htmlFor="office">
            <Buildings size={20} />
            Área de atuação
          </label>
          <SimpleSelect id="office" {...register("office")}>
            <option value="">------ Selecione o seu cargo ------</option>
            <option value="FullStack Developer">FullStack Developer</option>
            <option value="Front-End Dev.">Front-End Dev.</option>
            <option value="Back-End Dev.">Back-End Dev.</option>
            <option value="DevOps">DevOps</option>
          </SimpleSelect>
          {formState.errors.office?.message && (
            <Alert
              variant="danger"
              content={formState.errors.office?.message}
            />
          )}
        </FormGroup>

        <FormGroup>
          <label htmlFor="numberVerification">
            <Calculator size={20} />
            Quanto é: {firstNumber} + {secondNumber}
          </label>
          <input
            type="text"
            id="numberVerification"
            placeholder="....."
            {...register("numberVerification", { valueAsNumber: true })}
          />
          {formState.errors.numberVerification?.message && (
            <Alert
              variant="danger"
              content={formState.errors.numberVerification?.message}
            />
          )}
        </FormGroup>

        <FormGroup>
          <label htmlFor="interest">
            <Heart size={20} />
            Interesses
          </label>
          <MultipleSelect id="interest" multiple {...register("interest")}>
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
          {formState.errors.interest?.message && (
            <Alert
              variant="danger"
              content={formState.errors.interest?.message}
            />
          )}
        </FormGroup>

        <FormCheck>
          <div>
            <input
              type="checkbox"
              id="agreeTerm"
              {...register("checkValidation")}
            />
            <label htmlFor="agreeTerm">Concordar com os termos</label>
            {formState.errors.checkValidation?.message && (
              <Alert
                variant="warning"
                content={formState.errors.checkValidation?.message}
              />
            )}
          </div>
          <button disabled={isSubmittedForm} type="submit">
            <AddressBook size={20} />
            Cadastrar
          </button>
        </FormCheck>    
      </FormContainer>

    </HomeContainer>
  );
}

import React from "react";
import ModalPerfil from "./ModalPerfil";
import { Button, Form, Input, Modal } from "semantic-ui-react";
import RegistarHogarDetails from "@components/forms/hogar/RegistarHogarDetails";

const ModalEditHogar = (props) => {
  const {
    modalIsOpen, 
    handleCloseModal,
    handleEditHogar,
    hogarQueSeEditara,
    formik,
    handledChanged,
    errors,
    handledServicio,
    validarExistenciaServicio
  } = props;

  return (
    <ModalPerfil
      modalIsOpen={modalIsOpen}
      handleCloseModal={handleCloseModal}
      handleEditHogar={handleEditHogar}
    >
      <Form target="_blank" className="formularioEditarCuenta">
        <RegistarHogarDetails 
          formik={formik}
          handledChanged={handledChanged}
          errors={errors}
          handledServicio={handledServicio}
          hogarQueSeEditara={hogarQueSeEditara}
          validarExistenciaServicio={validarExistenciaServicio}
        />
        {/*<Form.Group widths="equal">
          <Form.Field width={7}>
            <label htmlFor="correo">
              {"Nombre hogar: " +
                (hogarQueSeEditara ? hogarQueSeEditara.nombre : "")}
            </label>
            <Input
              name="nombreHogar"
              id="nombreHogar"
              placeholder={hogarQueSeEditara.nombre}
            />
          </Form.Field>
          <Form.Field width={7}>
            <label htmlFor="correo">
              {"# Contrato: " +
                (hogarQueSeEditara
                  ? hogarQueSeEditara.numero_contrato
                  : "")}
            </label>
            <Input
              name="numeroContrato"
              id="numeroContrato"
              placeholder={hogarQueSeEditara.numero_contrato}
              autocomplete="off"
            />
          </Form.Field>
        </Form.Group>
        <Form.Group inline>
          <label>Servicios</label>
          <Form.Radio label="Agua" value="agua" />
          <Form.Radio label="Energía" value="Energía" />
                </Form.Group>*/}
      </Form>
      <Modal.Actions className="divActions">
          <Button color="black" onClick={handleCloseModal}>
            Descartar
          </Button>
          <Button
            content="Modificar"
            labelPosition="right"
            icon="checkmark"
            onClick={handleEditHogar}
            positive
          />
        </Modal.Actions>
    </ModalPerfil>
  );
};

export default ModalEditHogar;

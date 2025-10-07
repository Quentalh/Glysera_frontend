<<<<<<< HEAD
import { useState } from "react";
import styles from "../../styles/Register.module.css";

import NomeField from "../fields/NomeField";
import NomeSocialField from "../fields/NomeSocialField";
import NomeMaeField from "../fields/NomeMaeField";
import CpfField from "../fields/CpfField";
import DataField from "../fields/DataField";
import CepField from "../fields/CepField";
import RuaField from "../fields/RuaField";
import CidadeField from "../fields/CidadeField";
import EstadoField from "../fields/EstadoField";
import NumeroField from "../fields/NumeroField";
import ComplementoField from "../fields/ComplementoField";
import NeighborhoodField from "../fields/NeighborhoodField";
import RegisterButton from "../buttons/RegisterButton";


function RegisterForm() {
    const [formData, setFormData] = useState({
        nome: '',
        nome_social: '',
        nome_mae: '',
        cpf: '',
        nascimento: '',
        cep: '',
        rua: '',
        cidade: '',
        estado: '',
        numero: '',
        complemento: '',
        bairro: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const submissionData = {
            paciente: {
                nome: formData.nome,
                nome_social: formData.nome_social,
                nome_mae: formData.nome_mae,
                cpf: formData.cpf,
                nascimento_date: formData.nascimento_date,
            },
            endereco: {
                cep: formData.cep,
                rua: formData.rua,
                cidade: formData.cidade,
                estado: formData.estado,
                numero: formData.numero,
                complemento: formData.complemento,
                bairro: formData.bairro,
            }
        };

        const apiUrl = `${import.meta.env.VITE_API_URL}/pacientes`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Success:', result);
                alert('Cadastro realizado com sucesso!');
            } else {
                console.error('Error:', result);
                alert('Erro no cadastro: ' + result.errors.join(', '));
            }
        } catch (error) {
            console.error('Network Error:', error);
            alert('Erro de conexão. Verifique se o servidor Rails está rodando.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className={styles.text1}>Dados Pessoais</label>
            <NomeField value={formData.nome} onChange={handleChange} />
            <NomeSocialField value={formData.nome_social} onChange={handleChange} />
            <NomeMaeField value={formData.nome_mae} onChange={handleChange} />
            <CpfField value={formData.cpf} onChange={handleChange} />
            <DataField value={formData.nascimento_date} onChange={handleChange} />

            <label className={styles.text2}>Endereço</label>
            <CepField value={formData.cep} onChange={handleChange} />
            <RuaField value={formData.rua} onChange={handleChange} />
            <NeighborhoodField value={formData.bairro} onChange={handleChange} />
            <CidadeField value={formData.cidade} onChange={handleChange} />
            <EstadoField value={formData.estado} onChange={handleChange} />
            <NumeroField value={formData.numero} onChange={handleChange} />
            <ComplementoField value={formData.complemento} onChange={handleChange} />

            <div style={{ marginTop: '20px' }}>
                <RegisterButton />
            </div>
        </form>
=======
import FullNameField from "../fields/pacient/FullNameField";
import PreferredNameField from "../fields/pacient/PreferredNameField";
import MotherNameField from "../fields/pacient/MotherNameField";
import CpfField from "../fields/pacient/CpfField";
import DateOfBirthField from "../fields/pacient/DateOfBirthField";
import GenderField from "../fields/pacient/GenderField";
import PostalCodeField from "../fields/address/PostalCodeField";
import StreetField from "../fields/address/StreetField";
import CityField from "../fields/address/CityField";
import StateField from "../fields/address/StateField";
import NeighborhoodField from "../fields/address/NeighborhoodField";
import HouseNumberField from "../fields/address/HouseNumberField";
import AddressLine2Field from "../fields/address/AddressLine2Field";
import styles from "../../styles/Register.module.css";


function RegisterForm(){
    return(
      <div>
        <label className={styles.Tdados}>Dados</label>
        <FullNameField/>
        <PreferredNameField/>
        <MotherNameField/>
        <CpfField/>
        <DateOfBirthField/>
        <GenderField/>

        <label className={styles.Tendereco}>Endereço</label>
        <PostalCodeField/>
        <StreetField/>
        <CityField/>
        <StateField/>
        <NeighborhoodField/>
        <HouseNumberField/>
        <AddressLine2Field/>
      </div>
>>>>>>> origin/washington
    );
}

export default RegisterForm;
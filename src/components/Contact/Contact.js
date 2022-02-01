import "./Contact.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Contact = () => {
    const [value, setValue] = React.useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="contact">
            <h2>Contactanos!</h2>
            <h3>Envianos tu consulta y un representante se pondra en contacto</h3>
            <Box
                component="form"
                sx={{
                    width: '80%',
                    display: 'flex',
                    justifyContent: 'center',
                    margin: 'auto',
                    '& .MuiTextField-root': { m: 1, width: '80%' },
                }}
                noValidate
                autoComplete="off"
            >
                <div >
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Nombre"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                        placeholder="Nombre"
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Email"
                        placeholder="Email"
                        multiline
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Su consulta"
                        multiline
                        rows={4}
                        placeholder="Escriba su consulta"
                    />

                    <button type="submit" id='send-button'> Enviar </button>

                </div>
            </Box>

            <h4>Nos encontramos en Calle falsa 123</h4>
            <h4>Nuestro teléfono es 0303456</h4>
            <h4>También podés enviarnos un correo a betun@betun.com</h4>
            <h4>No dudes en contactarte </h4>

        </div>
    )
}

export default Contact
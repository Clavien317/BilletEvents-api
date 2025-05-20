'use client'

import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material'
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack
} from '@mui/material'

function Achat() {
  const { id } = useParams()

  const [formData, setFormData] = useState({
    nombre: 1,
    type: 'standard',
  })

  const [paymentData, setPaymentData] = useState({
    numeroCompte: '',
    titulaire: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [codeAchat, setCodeAchat] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'nombre' ? parseInt(value) || 1 : value,
    }))
  }

  const handlePaymentChange = (e) => {
    const { name, value } = e.target
    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleOpenModal = (e) => {
    e.preventDefault()
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleConfirmPayment = (e) => {
    e.preventDefault()
    if (!paymentData.numeroCompte || !paymentData.titulaire) {
      alert('Veuillez remplir tous les champs de paiement.')
      return
    }
    const code = `ACHAT-${Math.floor(Math.random() * 1000000)}`
    setCodeAchat(code)
    setSubmitted(true)
    setModalOpen(false)
  }

  const prixParBillet = formData.type === 'vip' ? 20000 : 10000
  const montantTotal = formData.nombre * prixParBillet

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-lg text-center">

        {submitted ? (
          <>
            <CheckCircleIcon sx={{ fontSize: 80, color: 'green', mx: 'auto', mb: 2 }} />
            <Typography variant="h4" gutterBottom>
              Achat Confirmé !
            </Typography>
            <Typography variant="body1" mb={3}>
              Votre paiement pour l'événement <strong>#{id}</strong> a bien été enregistré.
            </Typography>

            <Box textAlign="left" bgcolor="#f3f4f6" p={3} borderRadius={2} mb={3}>
              <Typography><strong>Événement :</strong> {id}</Typography>
              <Typography><strong>Type de billet :</strong> {formData.type === 'vip' ? 'VIP' : 'Standard'}</Typography>
              <Typography><strong>Nombre de billets :</strong> {formData.nombre}</Typography>
              <Typography><strong>Montant payé :</strong> {montantTotal.toLocaleString()} Ar</Typography>
              <Typography><strong>Code d'achat :</strong> {codeAchat}</Typography>
              <Typography><strong>Date :</strong> {new Date().toLocaleDateString()}</Typography>
              <Typography><strong>Statut :</strong> Payé</Typography>
            </Box>

            <Button
              variant="contained"
              color="warning"
              fullWidth
              onClick={() => window.location.href = '/evenements'}
            >
              Retour aux événements
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5" mb={3}>
              Achat de billets pour l'événement #{id}
            </Typography>
            <form onSubmit={handleOpenModal}>

              <Stack spacing={3}>
                <TextField
                  type="number"
                  label="Nombre de billets"
                  name="nombre"
                  inputProps={{ min: 1 }}
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <TextField
                  select
                  label="Type de billet"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  SelectProps={{ native: true }}
                  fullWidth
                >
                  <option value="standard">Standard</option>
                  <option value="vip">VIP</option>
                </TextField>

                <Typography variant="body1">
                  Montant total estimé : <strong>{montantTotal.toLocaleString()} Ar</strong>
                </Typography>

                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Effectuer le paiement
                </Button>
              </Stack>
            </form>

            <Modal
              open={modalOpen}
              onClose={handleCloseModal}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 400,
                  bgcolor: 'background.paper',
                  boxShadow: 24,
                  p: 4,
                  borderRadius: 2,
                }}
              >
                <Typography id="modal-title" variant="h6" component="h2" mb={2}>
                  Informations de paiement
                </Typography>

                <form onSubmit={handleConfirmPayment}>

                  <TextField
                    label="Numéro de compte Payeko"
                    name="numeroCompte"
                    value={paymentData.numeroCompte}
                    onChange={handlePaymentChange}
                    fullWidth
                    required
                    margin="normal"
                  />

                  <TextField
                    label="Nom du titulaire"
                    name="titulaire"
                    value={paymentData.titulaire}
                    onChange={handlePaymentChange}
                    fullWidth
                    required
                    margin="normal"
                  />

                  <TextField
                    label="Montant à payer (Ar)"
                    value={montantTotal.toLocaleString()}
                    fullWidth
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                  />

                  <Stack direction="row" spacing={2} justifyContent="flex-end" mt={3}>
                    <Button onClick={handleCloseModal}>Annuler</Button>
                    <Button type="submit" variant="contained" color="primary">
                      Confirmer le paiement
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Modal>
          </>
        )}
      </div>
    </div>
  )
}

export default Achat

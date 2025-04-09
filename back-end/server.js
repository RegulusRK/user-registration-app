//importando tudo que preciso
import express from 'express';
import { PrismaClient } from '@prisma/client'

//variáveis
const prisma = new PrismaClient()
const app = express()
app.use(express.json())

//criar cadastro
app.post('/usuarios', async(req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    //mensagem de que deu certo
    res.status(201).json(req.body)
})

//atualizar cadastro
app.put('/usuarios/:id', async(req, res) => {
    await prisma.user.update({
        where: {
            id:req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    //mensagem de que deu certo
    res.status(201).json(req.body)
})

//exibir todos os cadastros
app.get('/usuarios', async(req, res) => {

    const users = await prisma.user.findMany()

    //mensagem de que deu certo
    res.status(200).json(users)
});

app.delete('/usuarios/:id', async(req, res) =>{
    await prisma.user.delete({
        where: {
        id:req.params.id
        }
    })
    res.status(200).json({ message: "Usuáio deletado com Sucesso!"})
})

//meu ip local
app.listen(3000)
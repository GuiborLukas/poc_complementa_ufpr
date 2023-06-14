require("dotenv-safe").config();
const cors = require("cors");
const jwt = require('jsonwebtoken');
var http = require('http');
const express = require('express')
const httpProxy = require('express-http-proxy')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
const helmet = require('helmet');

//setting up your port
const PORT = process.env.PORT;
const app = express();

const corsOptions = {
  origin: '*',
  methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cookieParser());

const servicesProxy = httpProxy('http://localhost:5000');

function verifyJWT(req, res, next) {
    
    const token = req.headers['x-access-token'];
    if (!token)
        return res
            .status(401)
            .json({ auth: false, message: 'Token não fornecido.' });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
        if (err)
            return res.status(500).json({ auth: false, message: 'Falha ao autenticar o token.' });
        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
}

app.post('/login', (req, res, next) => {
    authServiceProxy(req, res, next);
    })

app.post('/logout', function (req, res) {
    res.json({ auth: false, token: null });
})

app.post('/usuarios', verifyJWT, (req, res, next) => {
    servicesProxy(req, res, next);
})

app.get('/usuarios', verifyJWT, (req, res, next) => {
  servicesProxy(req, res, next);
})

app.put('/usuarios', verifyJWT, (req, res, next) => {
  servicesProxy(req, res, next);
})

app.delete('/usuarios', verifyJWT, (req, res, next) => {
  servicesProxy(req, res, next);
})

app.post('/alunos', verifyJWT, (req, res, next) => {
    servicesProxy(req, res, next);
})

app.get('/alunos', verifyJWT, (req, res, next) => {
  servicesProxy(req, res, next);
})

app.put('/alunos', verifyJWT, (req, res, next) => {
  servicesProxy(req, res, next);
})

app.delete('/alunos', verifyJWT, (req, res, next) => {
servicesProxy(req, res, next);
})

app.post('/alunos/autocadastro', (req, res, next) => {
  servicesProxy(req, res, next);
  })

const authServiceProxy = httpProxy('http://localhost:5000', {

    proxyReqBodyDecorator: function (bodyContent, srcReq) {
        try {
            retBody = {};
            retBody.email = bodyContent.email;
            retBody.senha = bodyContent.senha;
            bodyContent = retBody;
        }
        catch (e) {
            console.log('- ERRO: ' + e);
        }
        return bodyContent;
    },
    proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
        proxyReqOpts.headers['Content-Type'] = 'application/json';
        proxyReqOpts.method = 'POST';
        return proxyReqOpts;
    },
    userResDecorator: function (
        proxyRes,
        proxyResData,
        userReq,
        userRes
      ) {
        try {
          if (proxyRes.statusCode == 200) {
            var str = Buffer.from(proxyResData).toString("utf-8");
            var objBody = JSON.parse(str);
            const id = objBody.id;
            const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
              expiresIn: "2 days" ,
            });
            let objRet = {
              id: objBody.id,
              nome: objBody.nome,
              email: objBody.email,
              telefone: objBody.telefone,
              papel: objBody.papel
            };
            return (
              userRes
                .status(200)
                // .json({ auth: true, token: token, data: objBody });
                .json({ auth: true, token: token, data: objRet })
            );
          } else {
            return userRes.status(401).json({ message: "Login inválido!" });
          }
        } catch (error) {
          console.log(`Erro Autenticação: ${error}`);
          return userRes.status(401).json({ message: "Login inválido!" });
        }
      }
});

app.listen(PORT, () => console.log(`Gateway online on http://localhost:${PORT}`));

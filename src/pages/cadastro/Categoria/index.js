import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
=======
import { Link } from 'react-router-dom'; 
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
>>>>>>> bf2cdf1fc64e3fd091207a553d94714d1f541573
}

export default CadastroCategoria;
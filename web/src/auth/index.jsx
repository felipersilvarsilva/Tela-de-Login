export const Auth = () => {
  return (
    <div className="min-h-full h-[100vh] flex content-center flex-wrap justify-around py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 content-start min-h-[400px]">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Tenho Cadastro</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="text">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full h-16 px-3 py-2 mt-3 mb-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md bg-[#F3F4F6] focus:outline-none focus:[#FF6500] focus:border-[#FF6500] focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password">
                Senha
              </label>
              <input
                id="password-registration"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full h-16 px-3 py-2 mt-3 mb-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md bg-[#F3F4F6] focus:outline-none focus:[#FF6500] focus:border-[#FF6500] focus:z-10 sm:text-sm"
                placeholder="Senha"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#FF6500] focus:[#C7560A] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Salvar Login
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-[#FF6500] hover:text-[#C7560A]">
                Recuperar senha?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full h-16 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF6500] hover:bg-[#ED660C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:[#C7560A]"
            >
              Entra
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-md w-full space-y-8 content-start min-h-[400px]">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Cadastro</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full h-16 px-3 py-2 mt-3 mb-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md bg-[#F3F4F6] focus:outline-none focus:[#FF6500] focus:border-[#FF6500] focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="nome-address">
                Nome Completo
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                autoComplete="nome-address"
                required
                className="appearance-none relative block w-full h-16 px-3 py-2 mt-3 mb-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md bg-[#F3F4F6] focus:outline-none focus:[#FF6500] focus:border-[#FF6500] focus:z-10 sm:text-sm"
                placeholder="Nome Completo"
              />
            </div>
            <div>
              <label htmlFor="cpf-address">
                CPF
              </label>
              <input
                id="cpf"
                name="cpf"
                type="text"
                autoComplete="cpf-address"
                required
                className="appearance-none relative block w-full h-16 px-3 py-2 mt-3 mb-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md bg-[#F3F4F6] focus:outline-none focus:[#FF6500] focus:border-[#FF6500] focus:z-10 sm:text-sm"
                placeholder="CPF"
              />
            </div>
            <div>
              <label htmlFor="password">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full h-16 px-3 py-2 mt-3 mb-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md bg-[#F3F4F6] focus:outline-none focus:[#FF6500] focus:border-[#FF6500] focus:z-10 sm:text-sm"
                placeholder="Senha"
              />
              <label htmlFor="password">
                Repita Senha
              </label>
              <input
                id="repeat-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full h-16 px-3 py-2 mt-3 mb-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md bg-[#F3F4F6] focus:outline-none focus:[#FF6500] focus:border-[#FF6500] focus:z-10 sm:text-sm"
                placeholder="Repita Senha"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full h-16 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF6500] hover:bg-[#ED660C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:[#C7560A]"
            >
              Cadastro
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}



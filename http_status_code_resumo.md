- **1xx - Informacional:**
  - 100 Continue: O servidor recebeu a solicitação do cliente e aguarda instruções adicionais.
  - 101 Switching Protocols: O servidor concorda em mudar os protocolos de comunicação.

- **2xx - Sucesso:**
  - 200 OK: A solicitação foi bem-sucedida, e o servidor retornou os dados solicitados.
  - 201 Created: A solicitação foi bem-sucedida, e um novo recurso foi criado.
  - 202 Accepted: A solicitação foi aceita para processamento, mas ainda não concluída.
  - 204 No Content: A solicitação foi bem-sucedida, mas não há dados para retornar.
  - 206 Partial Content: A solicitação de intervalo foi bem-sucedida.

- **3xx - Redirecionamento:**
  - 300 Multiple Choices: Há várias opções disponíveis para o recurso solicitado.
  - 301 Moved Permanently: O recurso solicitado foi movido permanentemente para um novo local.
  - 302 Found: O recurso solicitado foi encontrado, mas pode ter sido movido temporariamente.
  - 303 See Other: A resposta para a solicitação pode ser encontrada em um URI diferente.
  - 304 Not Modified: O recurso não foi modificado desde a última solicitação.
  - 307 Temporary Redirect: O servidor solicita que o cliente reenvie a solicitação para outro URI.
  - 308 Permanent Redirect: O servidor solicita que o cliente reenvie a solicitação para outro URI permanentemente.

- **4xx - Erro do Cliente:**
  - 400 Bad Request: A solicitação do cliente possui sintaxe inválida ou parâmetros incorretos.
  - 401 Unauthorized: O acesso ao recurso requer autenticação ou as credenciais fornecidas são inválidas.
  - 403 Forbidden: O acesso ao recurso é proibido, mesmo após autenticação.
  - 404 Not Found: O recurso solicitado não foi encontrado no servidor.
  - 405 Method Not Allowed: O método HTTP usado não é permitido para o recurso.
  - 406 Not Acceptable: O servidor não pode atender às preferências de conteúdo do cliente.
  - 407 Proxy Authentication Required: A autenticação do proxy é necessária.
  - 408 Request Timeout: O servidor encerrou a solicitação devido a um tempo limite.
  - 409 Conflict: A solicitação conflitou com o estado atual do recurso.
  - 410 Gone: O recurso solicitado não está mais disponível.
  - 411 Length Required: O servidor requer que a solicitação inclua o cabeçalho "Content-Length".
  - 412 Precondition Failed: As condições prévias definidas na solicitação não foram atendidas.
  - 413 Payload Too Large: A solicitação é muito grande para ser processada.
  - 414 URI Too Long: O URI da solicitação é muito longo para ser processado.
  - 415 Unsupported Media Type: O formato de mídia da solicitação não é suportado.
  - 429 Too Many Requests: O cliente excedeu o limite de solicitações.

- **5xx - Erro do Servidor:**
  - 500 Internal Server Error: O servidor encontrou um erro interno ao processar a solicitação.
  - 501 Not Implemented: A funcionalidade solicitada não está implementada no servidor.
  - 502 Bad Gateway: O servidor atua como um gateway ou proxy e recebeu uma resposta inválida do servidor upstream.
  - 503 Service Unavailable: O servidor não está disponível no momento (geralmente devido a sobrecarga).
  - 504 Gateway Timeout: O servidor atua como um gateway ou proxy e não recebeu uma resposta a tempo do servidor upstream.
  - 505 HTTP Version Not Supported: A versão HTTP usada na solicitação não é suportada pelo servidor.


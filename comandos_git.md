## Iniciar um novo repositório
git init

## Clonar um repositório existente
git clone <URL do repositório>

## Adicionar alterações para serem commitadas
git add arquivo.txt

## Criar um commit com as alterações
git commit -m "Mensagem do commit"

## Verificar o status das alterações
git status

## Visualizar o histórico de commits
git log

## Visualizar as diferenças entre versões
git diff

## Mudar para um commit específico ou ramo
git checkout <commit ou ramo>

## Desfazer commits
git reset <commit>

## Criar uma nova branch
git branch nova-branch

## Mudar para uma branch específica
git checkout outra-branch

## Criar e mudar para uma nova branch
git checkout -b nova-branch

## Mesclar alterações de outra branch na atual
git merge outra-branch

## Rebase: reaplicar commits da outra branch na atual
git rebase outra-branch

## Visualizar repositórios remotos associados
git remote -v

## Buscar atualizações do repositório remoto
git fetch

## Puxar (pull) as alterações do repositório remoto para a branch atual
git pull origin main

## Empurrar (push) as alterações locais para o repositório remoto
git push origin main

## Guardar temporariamente alterações não commitadas
git stash

## Criar tags para versões específicas
git tag v1.0.0

## Configurar nome de usuário e email
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@example.com"

# Mais comandos

## Criar uma nova tag anotada
git tag -a v1.0.0 -m "Mensagem da tag"

## Listar todas as tags
git tag

## Exibir informações de uma tag específica
git show v1.0.0

## Remover uma tag local
git tag -d v1.0.0

## Remover uma tag remota
git push origin --delete tag v1.0.0

## Mostrar branches remotas
git branch -r

## Deletar uma branch local
git branch -d branch-nome

## Deletar uma branch remota
git push origin --delete branch-nome

## Renomear uma branch local
git branch -m novo-nome

## Renomear uma branch remota
git push origin -u novo-nome

## Desfazer o último commit mantendo as alterações
git reset HEAD~

## Editar o último commit
git commit --amend

## Alterar o último commit sem editar a mensagem
git commit --amend --no-edit

## Visualizar as alterações antes de fazer um commit
git diff --staged

## Criar um novo repositório remoto
git remote add origin <URL do repositório>

## Criar uma nova branch baseada em outra
git checkout -b nova-branch outra-branch

## Visualizar o log com gráfico
git log --graph --oneline --all

## Visualizar quem fez cada alteração
git blame arquivo.txt

## Visualizar as alterações introduzidas por um commit
git show <hash do commit>

## Listar todas as branches fundidas na atual
git branch --merged

## Listar todas as branches não fundidas na atual
git branch --no-merged

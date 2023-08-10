## Клонирование проекта

Первым делом откройте терминал на своем ПК и используйте одну из следующих комманд (Для запуска необходим git)

```bash
git clone https://github.com/Kartofel-2834/reactive-phone-test-project.git

# или

gh repo clone Kartofel-2834/reactive-phone-test-project.git
```

## Установка зависимостей

Перейдите в созданную папку проекта

```bash
cd reactive-phone
```

Установите все зависимости проекта одной из следующих комманд:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Запуск сервера в режиме разработки (Development Server)

С помощью одной из следующих команд запустите сервер для разработки на `http://localhost:8080`:

```bash
# npm
npm run serve

# pnpm
pnpm run serve

# yarn
yarn serve
```

## Сборка на прод

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```
# Akita
Testing Angular with Akita for state-management.

# Getting started
Followed guide in docs: [Akita installation](https://netbasal.gitbook.io/akita/getting-started/installation)

Going with default options when asked.

```
npm install @datorama/akita

ng add @datorama/akita
```

# Using schematics
Following guide from [datorama/akita-schematics](https://github.com/datorama/akita-schematics)

```
npm install akita-schematics --save-dev

ng config cli.defaultCollection akita-schematics
```

# Create new feature
With default collection set, we can generate a new feature with model, service, query and store configured.

```
ng g feature todos/todos
```

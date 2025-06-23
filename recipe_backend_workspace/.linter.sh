#!/bin/bash
cd /home/kavia/workspace/code-generation/recipehub-32285-5562ddc0/recipe_backend_workspace/recipe_backend
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi


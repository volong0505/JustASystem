# _shared
npx nx g @nx/angular:lib libs/client/_shared/interceptors --name=client-shared-interceptors --standalone=false --skipModule=true --dryRun
npx nx g @nx/angular:lib libs/client/_shared/providers --name=client-shared-providers --standalone=false --skipModule=true --dryRun
npx nx g @nx/angular:lib libs/client/_shared/data-access/store --name=client-shared-data-access-store --standalone=false --skipModule=true --dryRun

-----------------------------------

# shell
npx nx g @nx/angular:lib libs/client/shell/feature --name=client-shell --standalone=false --dryRun

npx nx g @nx/angular:lib libs/client/shell/ui/layout --name=client-shell-ui-layout --standalone=false --skipModule=true --dryRun
npx nx g @nx/angular:component libs/client/shell/ui/layout/src/lib/layout.component.ts --name=layout --selector=client-layout --dryRun

# nav-bar
npx nx g @nx/angular:lib libs/client/shell/ui/nav-bar --name=client-shell-ui-nav-bar --standalone=false --skipModule=true --dryRun
npx nx g @nx/angular:component libs/client/shell/ui/nav-bar/src/lib/nav-bar.component.ts --name=nav-bar --selector=client-nav-bar --dryRun

# main-view
npx nx g @nx/angular:lib libs/client/shell/ui/main-view --name=client-shell-ui-main-view --standalone=false --skipModule=true --dryRun
npx nx g @nx/angular:component libs/client/shell/ui/main-view/src/lib/main-view.component.ts --name=main-view --selector=client-main-view --dryRun

-----------------------------------

# auth
#libs
npx nx g @nx/angular:lib libs/client/auth/ui/login --name=client-auth-ui-login --standalone=false --skipModule=true --dryRun
npx nx g @nx/angular:lib libs/client/auth/feature --name=client-auth-feature --standalone=false --skipModule=true --routing=true  --dryRun
npx nx g @nx/angular:lib libs/client/auth/data-access --name=client-auth-data-access --standalone=false --skipModule=true --dryRun
#components
npx nx g @nx/angular:component libs/client/auth/feature/src/lib/auth/auth.component.ts --name=auth --selector=client-auth --dryRun
npx nx g @nx/angular:component libs/client/auth/ui/login/src/lib/login.component.ts --name=login --selector=client-login --dryRun


-----------------------------------

# books
#libs
npx nx g @nx/angular:lib libs/client/books/data-access --name=client-books-data-access --standalone=false --skipModule=true --dryRun
npx nx g @nx/angular:lib libs/client/books/feature --name=client-books-feature --standalone=false --skipModule=true --routing=true --dryRun
npx nx g @nx/angular:lib libs/client/books/ui --name=client-books-ui --standalone=false --skipModule=true --dryRun
#components
npx nx g @nx/angular:component libs/client/books/feature/src/lib/books.component.ts --name=books --selector=client-books --dryRun
npx nx g @nx/angular:component libs/client/books/ui/src/lib/books-board-dnd/books-board-dnd.component.ts --name=books-board-dnd --selector=client-books-board-dnd --dryRun
npx nx g @nx/angular:component libs/client/books/ui/src/lib/books-board-dnd-list/books-board-dnd-list.component.ts --name=books-board-dnd-list --selector=client-books-board-dnd-list --dryRun

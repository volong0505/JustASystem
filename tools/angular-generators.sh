npx nx g @nx/angular:lib libs/client/shell/feature --name=client-shell --standalone=false --dryRun

npx nx g @nx/angular:lib libs/client/shell/ui/layout --name=client-shell-ui-layout --standalone=false --skipModule=true --dryRun
npx nx g @nx/angular:component libs/client/shell/ui/layout/src/lib/layout.component.ts --name=layout --selector=client-layout --dryRun
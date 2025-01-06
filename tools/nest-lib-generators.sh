npx nx g @nx/nest:lib --directory=libs/infra/mongo --dryRun
npx nx g @nx/nest:lib --directory=libs/api-interfaces --dryRun
npx nx g @nx/nest:lib --directory=libs/_shared/util-constants --dryRun
npx nx g @nx/nest:lib --directory=libs/_shared/util-common --dryRun


npx nx g @nx/nest:lib --directory=libs/server/core/feature --name=server-feature-core --controller=false --service=false --dryRun
npx nx g @nx/nest:lib --directory=libs/server/_common/middlewares --name=server-middlewares --controller=false --service=false --dryRun

npx nx g @nx/nest:lib --directory=libs/server/users/feature --name=server-feature-users --controller=true --service=true --dryRun
npx nx g @nx/nest:lib --directory=libs/server/users/data-access --name=server-data-access-users --service=true --dryRun

npx nx g @nx/nest:lib --directory=libs/server/auth/feature --name=server-feature-auth --controller=true --service=true --dryRun
npx nx g @nx/nest:lib --directory=libs/server/auth/data-access --name=server-data-access-auth --service=true --dryRun

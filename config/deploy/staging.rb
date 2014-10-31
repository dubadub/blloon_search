set :stage, :staging
set :branch, 'master'

server '176.58.104.49',
  user: 'wsd',
  roles: %w{web app}

namespace :deploy do
  task :push_compiled do
    system "cd ./dist && git add --all && git commit -m 'Deployment update' --allow-empty && git push origin master && cd .."

    system %q(cd ./dist &&
      git init &&
      # git remote rm origin &&
      git remote add origin git@github.com:dubadub/bloon_search_compiled.git &&
      git add --all &&
      git commit -m "Deployment update" --allow-empty &&
      git push -f origin master
    )
  end
  before :starting, 'deploy:push_compiled'
end




set :application, 'blloon_search'
set :repo_url, 'git@github.com:dubadub/blloon_search_compiled.git'
set :deploy_to, '/srv/www/blloon_search'

desc 'Gets uptime'
task :uptime do
  on roles(:app), in: :sequence, wait: 5 do
    execute :uptime
  end
end

namespace :deploy do
  task(:restart) {} # We don't need to restart angularjs application.
  after :finishing, 'deploy:cleanup'
end

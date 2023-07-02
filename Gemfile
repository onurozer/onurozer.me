source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

gem "bridgetown", "~> 1.2.0"

# Uncomment to add file-based dynamic routing to your project:
# gem "bridgetown-routes", "~> 1.0.0", group: :bridgetown_plugins

# Puma is a Rack-compatible server used by Bridgetown
# (you can optionally limit this to the "development" group)
gem 'puma', '~> 6.0'
gem "rack", "~> 2.2"

group :development do
  gem "standard"
end

group :bridgetown_plugins do
  gem "bridgetown-plausible", "~> 1.1"
  # gem "bridgetown-seo-tag", "~> 5.0"
  # gem "bridgetown-sitemap", "~> 1.1"
end

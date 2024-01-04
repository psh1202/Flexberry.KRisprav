docker build --no-cache -f SQL\Dockerfile.PostgreSql -t krisprav/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t krisprav/app ../..

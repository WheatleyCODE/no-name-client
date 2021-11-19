run:
	docker run -d -p 3000:3000 --rm --name nonameclient ID
stop:
	docker stop nonameclient
all: 
	mkdir -p out
	watch cp src/*.js out/ &> /dev/null &
	jade -w src --out out &> /dev/null &
	scss -w src:out &> /dev/null &
	http-server out -so

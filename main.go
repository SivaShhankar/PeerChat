package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
)

func MainPage(w http.ResponseWriter, r *http.Request) {

	t, _ := template.ParseFiles("Templates/Chat1.html")
	w.Header().Set("Content-Type", "text/html")
	t.Execute(w, nil)
}
func UserInput(w http.ResponseWriter, r *http.Request) {
	// fmt.Println("Chat Calling")
	w.Header().Set("Content-Type", "text/html")
	t, _ := template.ParseFiles("Templates/userinput.html")
	t.Execute(w, nil)
}
func makecall(w http.ResponseWriter, r *http.Request) {
	// fmt.Println("Chat Calling")
	w.Header().Set("Content-Type", "text/html")
	t, _ := template.ParseFiles("Templates/VideoChat.html")
	t.Execute(w, nil)
}

func main() {

	mux := http.NewServeMux()

	mux.Handle("/", http.HandlerFunc(MainPage))
	mux.Handle("/UserInput", http.HandlerFunc(UserInput))
	mux.Handle("/Call", http.HandlerFunc(makecall))
	mux.Handle("/JS/", http.StripPrefix("/JS/", http.FileServer(http.Dir("Templates/JS"))))
	mux.Handle("/CSS/", http.StripPrefix("/CSS/", http.FileServer(http.Dir("Templates/CSS"))))
	mux.Handle("/images/", http.StripPrefix("/images/", http.FileServer(http.Dir("Templates/images"))))
	log.Println("Listening...")

	http.ListenAndServe(GetPort(), mux)

}
func GetPort() string {
	var port = os.Getenv("PORT")
	if port == "" {
		port = "4747"
		fmt.Println("INFO: No PORT environment variable detected, defaulting to " + port)
	}

	fmt.Println("Running Port is" + port)
	return ":" + port
}

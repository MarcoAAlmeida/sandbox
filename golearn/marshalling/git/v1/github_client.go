package v1

import (
	"context"
	gh "github.com/google/go-github/v58/github"
	"io"
	"log"
	"os"
)

func DownloadYamlResource() string {
	token := os.Getenv("GITHUB_TOKEN")

	client := gh.NewClient(nil).WithAuthToken(token)

	r, _, err := client.Repositories.DownloadContents(context.Background(), "MarcoAAlmeida", "sandbox", "golearn/marshalling/resources/fromFile.yml", nil)

	if err != nil {
		log.Fatal(err)
	}

	bytes, err := io.ReadAll(r)
	if err != nil {
		log.Fatal(err)
	}

	return string(bytes)
}

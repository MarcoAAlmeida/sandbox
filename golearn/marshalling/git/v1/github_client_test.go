package v1

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestDownloadYamlResource(t *testing.T) {
	content := DownloadYamlResource()

	assert.NotEmptyf(t, content, "content was dowloaded")
}

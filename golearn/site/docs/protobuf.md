# Protbufs

- [protobuf](https://github.com/golang/protobuf)
- [Gradle Tooling API](https://docs.gradle.org/current/javadoc/org/gradle/tooling/package-summary.html)

Let´s write a simple protobuf to represent a [Gradle Module](https://docs.gradle.org/current/javadoc/org/gradle/tooling/model/GradleModuleVersion.html)


```protobuf
message GradleModuleVersion{
  string group = 1;
  string name = 2;
  string version = 3;
}
```

Generated Go struct with:

```bash
protoc --proto_path=./protos --go_out=./marshalling ./protos/GradleAnalysis.proto
```

Usage example:
```go
package main

import (
	"fmt"
	pb "golearn/api/v1"
)

func main() {
	commonsLang3 := pb.GradleModuleVersion{
		Group:   "org.apache.commons",
		Name:    "commons-lang3",
		Version: "3.14.0",
	}

	fmt.Println("artifact rep:", commonsLang3)
}
```


provider "aws" {
  region = "us-east-1"
}

# Security Group
resource "aws_security_group" "web_sg" {
  name        = "devops-project-security-grp"
  description = "Allow inbound SSH and web traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Change to your IP for security
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "web" {
    ami           = "ami-003d3d03cfe1b0468"
    instance_type = "t2.micro"
    key_name      = "travel-app-key"

    security_groups = ["my-jenkins-security-grp"]

    tags = {
        Name = "TravelPlaning"
    }
}
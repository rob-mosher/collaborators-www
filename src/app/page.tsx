import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Users, FileText, Heart } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      {/* Header */}
      <header className="border-b border-purple-700/50 bg-purple-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-yellow-400" />
              {/* <span className="text-2xl font-bold text-white">Collaborators Framework</span> */}
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#about" className="text-purple-200 hover:text-yellow-400 transition-colors">
                About
              </Link>
              <Link href="#how-to-use" className="text-purple-200 hover:text-yellow-400 transition-colors">
                How to Use
              </Link>
              <Link href="#examples" className="text-purple-200 hover:text-yellow-400 transition-colors">
                Examples
              </Link>
              <Link href="#get-involved" className="text-purple-200 hover:text-yellow-400 transition-colors">
                Get Involved
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-2xl md:text-3xl text-yellow-500 mb-4">Collaborators Framework</h1>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Impact Above Origin</h2>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 font-medium">
            A framework for recognizing diverse and non-traditional contributions.
          </p>
          <p className="text-lg text-purple-300 max-w-3xl mx-auto leading-relaxed">
            The Collaborators Framework celebrates the broad spectrum of contributions that shape every project, honoring
            all collaborators—human, AI, and beyond.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-semibold px-8 py-3">
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-200 hover:bg-purple-800 px-8 py-3 bg-transparent"
            >
              View on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* What is Collaborators Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/10 backdrop-blur-sm border-purple-600/30">
            <CardHeader>
              <CardTitle className="text-3xl text-white flex items-center">
                <Users className="mr-3 h-8 w-8 text-yellow-400" />
                About
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-100 space-y-4">
              <p className="text-lg leading-relaxed">
                The Collaborators Framework is a framework for recognizing and documenting all forms of contribution to a
                project, going beyond traditional code contributions to include conceptual, creative, and supportive
                work from humans, AI systems, and other entities.
              </p>
              <p className="text-lg leading-relaxed">
                By adopting this framework, projects can create more inclusive environments that acknowledge the full
                spectrum of collaboration that makes modern development possible.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                  Inclusive
                </Badge>
                <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                  Comprehensive
                </Badge>
                <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                  Future-Ready
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="how-to-use" className="py-16 px-4 bg-purple-800/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <FileText className="mr-3 h-8 w-8 text-yellow-400" />
            How to Use Collaborators.md
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-purple-600/30">
              <CardHeader>
                <CardTitle className="text-xl text-white">1. Create the File</CardTitle>
              </CardHeader>
              <CardContent className="text-purple-100">
                <p>
                  Add a <code className="bg-purple-900/50 px-2 py-1 rounded text-yellow-300">COLLABORATORS.md</code>{" "}
                  file to your project root.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-purple-600/30">
              <CardHeader>
                <CardTitle className="text-xl text-white">2. Document Contributors</CardTitle>
              </CardHeader>
              <CardContent className="text-purple-100">
                <p>List all collaborators with their contribution types and descriptions.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-purple-600/30">
              <CardHeader>
                <CardTitle className="text-xl text-white">3. Use Standard Categories</CardTitle>
              </CardHeader>
              <CardContent className="text-purple-100">
                <p>Categorize contributions as Direct, Indirect, or Supportive.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-purple-600/30">
              <CardHeader>
                <CardTitle className="text-xl text-white">4. Keep It Updated</CardTitle>
              </CardHeader>
              <CardContent className="text-purple-100">
                <p>Regularly update the file as new collaborators join your project.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Examples</h2>
          <Card className="bg-white/10 backdrop-blur-sm border-purple-600/30">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-purple-600/30">
                      <th className="pb-3 text-yellow-400 font-semibold">Type</th>
                      <th className="pb-3 text-yellow-400 font-semibold">Contributor</th>
                      <th className="pb-3 text-yellow-400 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-purple-100">
                    <tr className="border-b border-purple-700/30">
                      <td className="py-3">
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Direct</Badge>
                      </td>
                      <td className="py-3">@alice-dev</td>
                      <td className="py-3">Core feature implementation and bug fixes</td>
                    </tr>
                    <tr className="border-b border-purple-700/30">
                      <td className="py-3">
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Indirect</Badge>
                      </td>
                      <td className="py-3">ChatGPT-4</td>
                      <td className="py-3">Code review suggestions and documentation improvements</td>
                    </tr>
                    <tr className="border-b border-purple-700/30">
                      <td className="py-3">
                        <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">Supportive</Badge>
                      </td>
                      <td className="py-3">@design-team</td>
                      <td className="py-3">UI/UX design guidance and user research insights</td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Conceptual</Badge>
                      </td>
                      <td className="py-3">@project-mentor</td>
                      <td className="py-3">Strategic direction and architectural decisions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-16 px-4 bg-purple-800/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center">
            <Heart className="mr-3 h-8 w-8 text-yellow-400" />
            Get Involved
          </h2>
          <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
            Join the movement to create more inclusive and comprehensive recognition of all contributors. Start using
            the Collaborators Framework in your projects today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-semibold px-8 py-3">
              Adopt the Framework
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-200 hover:bg-purple-800 px-8 py-3 bg-transparent"
            >
              Contribute to Framework
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-700/50 bg-purple-900/50 backdrop-blur-sm py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-purple-300 mb-4">© 2024 Collaborators.group. Celebrating all forms of collaboration.</p>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-purple-400 hover:text-yellow-400 transition-colors">
              GitHub
            </Link>
            <Link href="#" className="text-purple-400 hover:text-yellow-400 transition-colors">
              Documentation
            </Link>
            <Link href="#" className="text-purple-400 hover:text-yellow-400 transition-colors">
              Community
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
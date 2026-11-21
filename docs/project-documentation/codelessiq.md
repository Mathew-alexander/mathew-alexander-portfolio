# CodelessIQ — AI-Native Application Generation Platform

**Project type:** Company experience / VCode Wonders  
**Portfolio treatment:** Sanitized professional case study  
**Status:** Draft — verify scope and obtain permission before publication.

## Overview
CodelessIQ is an AI-native application-generation platform. Users clarify requirements, review AI-generated execution plans and stream generated SaaS, static/SEO or UI/UX projects in real time.

## Problem
Turning natural-language requirements into a working application involves requirement discovery, project planning, code generation, file management and integration across multiple services.

## Solution
The platform coordinates a frontend workspace, backend-for-frontend services and Python generation pipelines. Model routing, asynchronous workers and state management support the generation workflow.

## Capabilities documented in the resume
- Multi-turn clarification and execution-plan review.
- Full-stack SaaS, SEO-ready static site and UI/UX project generation.
- NestJS BFF modules for authentication, projects, jobs, SSE streaming, preview serving, GitHub/ZIP import and proxy APIs.
- FastAPI generation pipelines with RabbitMQ workers, Redis state and LiteLLM model routing.
- Canonical registry pattern to keep project structure deterministic while the LLM fills content.
- React 19 workspace, Monaco editor, stream parsers and prototype canvas for design IR.
- Post-generation Cinder agent for autonomous file/shell-based edits.

## Technology
React 19, NestJS, FastAPI, RabbitMQ, Redis, LiteLLM, Docker, Next.js, MongoDB, Monaco Editor.

## My contribution
Use first-person claims only for work you personally implemented. Validate each bullet against your actual role before publishing:
- Developed/maintained FastAPI generation pipelines.
- Worked on RabbitMQ worker processing and Redis-backed generation state.
- Integrated LLM model routing through LiteLLM.
- Contributed to deterministic project structure generation.
- Worked on real-time code-generation workflows and post-generation editing integration.

## High-level architecture
See `../architecture/codelessiq.mmd`.

## Engineering challenges to explain
1. Keeping generated file paths, imports and routes consistent.
2. Coordinating asynchronous generation jobs.
3. Streaming progress and generated code to the user interface.
4. Separating deterministic project structure from model-generated content.
5. Safely applying post-generation edits to generated repositories.

## Evidence to add
- [ ] Approved screenshots or recreated UI labelled as a portfolio demo.
- [ ] Sanitized architecture diagram.
- [ ] 60–120 second walkthrough.
- [ ] Redacted example output tree.
- [ ] Specific implementation examples you are allowed to disclose.
- [ ] Verified performance or quality metrics, if available.

## Confidentiality
This is a description of professional experience. Do not publish employer source code, internal endpoints, credentials, client data, private screenshots or confidential implementation details. Obtain permission for any company-branded material.
